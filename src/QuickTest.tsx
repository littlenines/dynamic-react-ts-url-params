import { FC } from "react";

interface Props {
  page: number;
  row: number;
  setPage: (arg: number) => void;
  setRow: (arg: number) => void;
  changeValue: (arg: any, arg2: any) => void;
}
const QuickTest: FC<Props> = ({ page, row, setPage, setRow, changeValue }) => {
  return (
    <>
      <p>For page:</p>
      <input
        type="number"
        value={page}
        onChange={(value) => changeValue(value, setPage)}
      />
      <p>For row:</p>
      <input
        type="number"
        value={row}
        onChange={(value) => changeValue(value, setRow)}
      />
    </>
  );
};

export default QuickTest;
