import axios from "axios";

export const validateMemberByEmail = async (email) => {
  try {
    const res = await axios({
      method: "post",
      url: "https://auth.app.dlsu-lscs.org/member",
      headers: {
        Authorization: `Bearer ${process.env.LSCS_AUTH_KEY}`,
        "Content-Type": "application/json",
      },
      data: {
        email: email,
      },
    });

    return res.data;
  } catch (error) {
    throw new Error(err.res ? err.res.data : err.message);
  }
};
