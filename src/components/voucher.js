import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaInfoCircle, FaRegTrashAlt, FaPlus } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPencilFill } from "react-icons/bs";
import {
  Box,
  Form,
  Input,
  Combobox,
  FileInput,
  Textarea,
  SwitchInput,
  Radio,
  Chip,
  Table,
  Toggle,
  TableActions,
} from "./elements";
import s from "./voucher.module.scss";

function Voucher() {
  const [vouchers, setVouchers] = useState([
    {
      type: "45641520",
      subType: "Location one",
      date: "Location",
      number: "5410",
      account: "account 1",
    },
    {
      type: "45641520",
      subType: "Location two",
      date: "Location",
      number: "87851",
      account: "account 2",
    },
    {
      type: "45641520",
      subType: "Location three",
      date: "Location",
      number: "8900",
      account: "account 3",
    },
  ]);
  return (
    <div className={s.container}>
      <header>
        <h3>VOUCHER</h3>
      </header>
      <div className={s.content}>
        <Table
          columns={[
            { label: "Type" },
            { label: "Subtype" },
            { label: "Date" },
            { label: "Number" },
            { label: "Account" },
            { label: "Action" },
          ]}
        >
          <tr>
            <td className={s.inlineForm}>
              <VoucherForm
                edit={{
                  status: true,
                  locationType: ["Location type one", "Location type two"],
                }}
              />
            </td>
          </tr>
          {vouchers.map((vc, i) => (
            <tr key={i}>
              <td>{vc.type}</td>
              <td>{vc.subType}</td>
              <td>{vc.date}</td>
              <td>{vc.number}</td>
              <td>{vc.account}</td>
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
    </div>
  );
}
const VoucherForm = ({ edit, onChange }) => {
  const [type, setType] = useState(edit?.type || "");
  return (
    <Form
      defaultValues={edit}
      onSubmit={(data) => {
        console.log(data);
      }}
    >
      <Combobox
        name="type"
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
      <Combobox
        name="subType"
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
      <Input type="date" required={true} name="code" placeholder="Enter" />
      <Input
        required={true}
        name="number"
        placeholder="Enter"
        icon={<BiSearch />}
      />
      <Combobox
        name="account"
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
      <button className="btn secondary">
        <FaPlus />
      </button>
    </Form>
  );
};

export default Voucher;
