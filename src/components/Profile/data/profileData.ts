export interface UserData {
  id: string;
  name: string;
  username: string;
  avatar: string;
  bio: string;
  university: string;
}

export const mockUserData: UserData = {
  id: "current-user",
  name: "John Doe",
  username: "john_doe",
  avatar:
    "https://ui-avatars.com/api/?name=John+Doe&background=3b82f6&color=fff&size=150",
  bio: "Computer Science student passionate about web development and AI. Love coding and exploring new technologies!",
  university: "University of California, Berkeley",
};
