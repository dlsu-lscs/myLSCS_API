import axios from 'axios'

export const validateMemberByEmail = async (email) => {
  try {
    const res = await axios.post(
      'https://auth.app.dlsu-lscs.org/member',
      { email },
      {
        headers: {
          Authorization: `Bearer ${process.env.LSCS_AUTH_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    )

    return res.data
  } catch (err) {
    throw new Error(err.response ? err.response.data : err.message)
  }
}
