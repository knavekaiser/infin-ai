import { useState } from "react";
import { FaInfoCircle, FaPlus, FaRegTrashAlt } from "react-icons/fa";
import { BsPencilFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import { IoIosClose } from "react-icons/io";
import {
  Box,
  Form,
  Input,
  Combobox,
  Table,
  TableActions,
  Toggle,
} from "../elements";
import { Modal } from "../modal";
import s from "./masters.module.scss";

export default function Account() {
  const [accounts, setAccounts] = useState([
    {
      name: "45641520",
      groupAccount: "Location one",
      group: "Location",
      status: true,
    },
    {
      name: "45641520",
      groupAccount: "Location two",
      group: "Location",
      status: true,
    },
    {
      name: "45641520",
      groupAccount: "Location three",
      group: "Location",
      status: false,
    },
    {
      name: "45641520",
      groupAccount: "Location four",
      group: "Location",
      status: true,
    },
    {
      name: "45641520",
      groupAccount: "Location five",
      group: "Location",
      status: false,
    },
  ]);
  return (
    <div className={s.container}>
      <header>
        <h3>ACCOUNT MASTER</h3>
      </header>
      <div className={s.accounts}>
        <Table
          columns={[
            { label: "Name" },
            { label: "Group/Account" },
            { label: "Account" },
            { label: "Op Balance" },
            { label: "Dr/Cr" },
            { label: "Action" },
          ]}
        >
          <tr>
            <td className={s.inlineForm}>
              <AccountForm
                edit={{
                  status: true,
                  locationType: ["Location type one", "Location type two"],
                }}
              />
            </td>
          </tr>
          {accounts.map((ac, i) => (
            <tr key={i}>
              <td>{ac.name}</td>
              <td>{ac.groupAccount}</td>
              <td>{ac.group}</td>
              <td>{ac.opBalance}</td>
              <td>
                <Toggle defaultValue={ac.status} />
              </td>
              <TableActions
                actions={[
                  {
                    icon: <BsPencilFill />,
                    label: "Edit",
                    callBack: () => console.log("edit"),
                  },
                  {
                    icon: <FaRegTrashAlt />,
                    label: "Delete",
                    callBack: () => console.log("delete"),
                  },
                ]}
              />
            </tr>
          ))}
        </Table>
      </div>
      <div className={s.btns}>
        <button className="btn w-100">Save</button>
      </div>
    </div>
  );
}
const AccountForm = ({ edit, onChange }) => {
  const [type, setType] = useState(edit?.type || "");
  return (
    <Form
      defaultValues={edit}
      onSubmit={(data) => {
        console.log(data);
      }}
    >
      <Input
        required={true}
        name="code"
        placeholder="Enter"
        icon={<BiSearch />}
      />
      <Input
        required={true}
        name="name"
        placeholder="Enter"
        icon={<BiSearch />}
      />
      <Combobox
        name="locationType"
        required={true}
        placeholder="Enter"
        multiple={true}
        options={[
          "Location type one",
          "Location type two",
          "Location type three",
          "Location type four",
        ]}
        onChange={(e) => setType(e.target.value)}
      />
      <Input
        required={true}
        name="opBalance"
        placeholder="Enter"
        icon={<BiSearch />}
      />
      <Toggle name="status" />
      <button className="btn secondary">
        <FaPlus />
      </button>
    </Form>
  );
};
