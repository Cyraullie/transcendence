import type { accountT } from "../utils/accountType";

export function ProfilePart({ accountCurr }: { accountCurr: accountT }) {
  return (
    <div>
      <div className="avatar mt-8 flex-col">
        <div className="rounded-4xl w-24">
          <img src={accountCurr.avatar} />
        </div>
        <p className="text-green-200 font-extrabold my-2 mx-auto">
          {accountCurr.is_online ? "Online" : ""}
        </p>
      </div>
      <table className="mt-5">
        <tr>
          <th className="title-profile">Username:</th>
          <td>{accountCurr.username}</td>
        </tr>
        <tr>
          <th className="title-profile">Email:</th>
          <td>{accountCurr.mail}</td>
        </tr>
        <tr>
          <th className="title-profile">Password:</th>
          <td>*******</td>
          <td>
            <a className="link">change</a>
          </td>
        </tr>
        <tr>
          <th className="title-profile">Joined on:</th>
          <td>{accountCurr.date_joined}</td>
        </tr>
        <tr>
          <th className="title-profile">Last login:</th>
          <td>{accountCurr.is_online ? "now" : accountCurr.last_login}</td>
        </tr>
      </table>
    </div>
  );
}
