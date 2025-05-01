export const sendInviteRequest = async (values) => {
  return await fetch(`https://hraviratoms-server.onrender.com/api/wed-3-template/create`, {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });
}

export const getGuests = async () => {
 return await fetch(`https://hraviratoms-server.onrender.com/api/wed-3-template/guests`);
}