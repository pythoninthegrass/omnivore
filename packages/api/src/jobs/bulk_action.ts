import { BulkActionType } from '../generated/graphql'
import { getBackendQueue } from '../queue-processor'
import { batchUpdateLibraryItems } from '../services/library_item'
import { logger } from '../utils/logger'

export interface BulkActionData {
  count: number
  userId: string
  action: BulkActionType
  query: string
  batchSize: number
  labelIds?: string[]
  args?: unknown
}

export const BULK_ACTION_JOB_NAME = 'bulk-action'

export const bulkAction = async (data: BulkActionData) => {
  const { userId, action, query, labelIds, args, batchSize, count } = data

  const queue = await getBackendQueue()
  if (!queue) {
    throw new Error('Queue not initialized')
  }
  const now = new Date().toISOString()
  let offset = 0

  do {
    const searchArgs = {
      size: batchSize,
      query: `(${query}) AND updated:*..${now}`, // only process items that have not been updated
    }

    try {
      await batchUpdateLibraryItems(action, searchArgs, userId, labelIds, args)
    } catch (error) {
      logger.error('batch update error', error)
    }

    offset += batchSize
  } while (offset < count)

  return true
}
