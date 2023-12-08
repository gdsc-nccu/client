export const fetchUser = async (email: string): Promise<User> => {
  const res = await fetch(`https://testforgdsc.pythonanywhere.com/read_member/${email}`, {method: "GET"})
  
  if (!res.ok) {
    console.log("user not found")
  }
  
  return res.json() as Promise<User>
};


