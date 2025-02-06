import { useUserStore } from "@/store";
export default function Profile() {
  const username = useUserStore((state) => state.username);

  return (
    <div>
      <h1>Profile</h1>
      Your username: {username}
    </div>
  );
}
