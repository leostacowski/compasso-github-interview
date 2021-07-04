export const isDEV = () => {
  const NODE_ENV = process.env.NODE_ENV || 'development'
  return NODE_ENV === 'development'
}
