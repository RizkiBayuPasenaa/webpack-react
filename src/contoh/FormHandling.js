import { useState } from 'react';

export default function FormHandling() {
  const initialState = {
    nama: '',
    hobby: '',
    agama: '',
  };

  const [data, setData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setData(initialState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({...data,[name]: value,});
    console.log(data);
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nama">Nama</label>
      <input
        type="text"
        name="nama"
        onChange={handleChange}
        value={data.nama}
      />

      <label htmlFor="hobby">Hobby</label>
      <input
        type="text"
        name="hobby"
        onChange={handleChange}
        value={data.hobby}
      />

      <label htmlFor="agama">Agama</label>
      <input
        type="text"
        name="agama"
        onChange={handleChange}
        value={data.agama}
      />

      <button type="submit">Submit</button>
    </form>
  );
}
