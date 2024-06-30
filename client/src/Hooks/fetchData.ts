import axios from "axios";

export async function getAdvice() {
  try {
    const response = await axios.get("https://api.adviceslip.com/advice");
    const advice = {
      adviceContent: response.data.slip.advice,
      adviceId: response.data.slip.id,
    };
    return advice;
  } catch (error) {
    console.error(error);
  }
}
