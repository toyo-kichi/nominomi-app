export const createGroup = async (
  groupId: string,
  groupName: string,
  passcode: string
) => {
  const response = await fetch("http://localhost:3001/auth/create-group", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ groupId, name: groupName, passcode }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "グループ作成失敗");
  }
  return data;
};
