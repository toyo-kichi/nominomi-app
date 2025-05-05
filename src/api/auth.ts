export const login = async (groupId: string, passcode: string) => {
  const response = await fetch("http://localhost:3001/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ groupId, passcode }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "ログイン失敗");
  }
  return data.token;
};
