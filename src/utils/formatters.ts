/**
 * Formats a date string to a readable format
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Formats service description to be more readable
 */
export function formatServiceDescription(
  description: string,
  maxLength: number = 150
): string {
  if (description.length <= maxLength) {
    return description
  }

  return description.substring(0, maxLength).trim() + '...'
}

/**
 * Processes image file names to ensure proper paths
 */
export function processImagePath(imagePath: string): string {
  // Ensure the path starts with /
  if (!imagePath.startsWith('/')) {
    return `/${imagePath}`
  }
  return imagePath
}

/**
 * Formats project timeline for display
 */
export function formatProjectTimeline(
  startDate?: string,
  endDate?: string
): string {
  if (!startDate && !endDate) {
    return 'Timeline not available'
  }

  if (startDate && endDate) {
    return `${formatDate(startDate)} - ${formatDate(endDate)}`
  }

  if (endDate) {
    return `Completed: ${formatDate(endDate)}`
  }

  return `Started: ${formatDate(startDate!)}`
}
