import useQueryParam from './utils/useQueryParam';
import QuickTest from './QuickTest';

import './App.css'

function App() {

  const [page, setPage] = useQueryParam<number>('page', 0);
  const [row, setRow] = useQueryParam<number>('row', 0);
  const [line, setLine] = useQueryParam<string>('line', '');

  const changeValue = (value: any, setValue: any) => {
    setValue(value.target.value)
  }

  return (
    <>
      <div>
        <QuickTest page={page} row={row} setPage={setPage} setRow={setRow} changeValue={changeValue}/>
        <p>Test for string</p>
        <input type="text" value={line} onChange={(value) => changeValue(value, setLine)} />
      </div>
    </>
  )
}

export default App
