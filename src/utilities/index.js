export const isDEV = () => {
  const NODE_ENV = process.env.NODE_ENV || 'development'
  return NODE_ENV === 'development'
}

export const getGithubClientKeys = () => {
  return {
    client_id: isDEV() ? process.env.CLIENT_ID_DEV : process.env.CLIENT_ID_PRD,
    client_id_secret: isDEV()
      ? process.env.CLIENT_ID_SECRET_DEV
      : process.env.CLIENT_ID_SECRET_PRD,
  }
}
