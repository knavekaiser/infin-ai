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
} from "./elements";
import { Modal } from "./modal";
import s from "./reports.module.scss";

export default function Reports() {
  const [accounts, setAccounts] = useState([
    {
      date: "45641520",
      number: "Location one",
      account: "Location",
      debit: 56045,
      credit: 450,
    },
    {
      date: "45641520",
      number: "Location one",
      account: "Location",
      debit: 12.01,
      credit: 52744,
    },
    {
      date: "45641520",
      number: "Location one",
      account: "Location",
      debit: 475867,
      credit: 4455,
    },
    {
      date: "45641520",
      number: "Location one",
      account: "Location",
      debit: 6578,
      credit: 7457,
    },
    {
      date: "45641520",
      number: "Location one",
      account: "Location",
      debit: 674,
      credit: 67855,
    },
  ]);
  return (
    <div className={s.container}>
      <header>
        <h3>REPORT</h3>
      </header>
      <div className={s.accounts}>
        <Table
          columns={[
            { label: "Date" },
            { label: "Number" },
            { label: "Account" },
            { label: "Debit" },
            { label: "Credit" },
          ]}
        >
          {accounts.map((ac, i) => (
            <tr key={i}>
              <td>{ac.date}</td>
              <td>{ac.number}</td>
              <td>{ac.account}</td>
              <td>{ac.debit}</td>
              <td>{ac.credit}</td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}
