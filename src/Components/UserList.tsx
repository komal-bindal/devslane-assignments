import React, { useEffect, useState } from "react";
import axios from "axios";
import UserRow from "./UserRow";
interface Props {
  page: number;
}
const UserList: React.FC<Props> = ({page}) => {
  const [users, setUsers] = useState<any>([]);
  useEffect(() => {
    axios
      .get(
        "https://randomuser.me/api/?inc=id,name,gender,email&page=" +
          page +
          "&results=20"
      )
      .then((response) => {
        console.log(response.data.results);
        setUsers(response.data.results);
      });
  }, [page]);

  return (<div>
      {users.map((u:any) => (
         <UserRow email = {u.email} title = {u.name.title} firstName = {u.name.first} lastName = {u.name.last} gender = {u.gender} ></UserRow>
      ))}
  </div>);
};
UserList.defaultProps = {};

export default React.memo(UserList);
