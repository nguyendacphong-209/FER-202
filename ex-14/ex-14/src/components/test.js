import {useState, useEffect} from 'react'

export const Test = () => {
    const [value, setValue] = useState(1)
    useEffect(()=> {
        fetchData()
    }, [value])


    const fetchData = () => {
        fetch('https://catfact.ninja/fact')
        .then(response => response.json()) // Chuyển response thành JSON
        .then(data => {
            console.log(data.fact); // Hiển thị dữ liệu nhận được
        })
        .catch(error => {
            console.error('Lỗi:', error); // Bắt lỗi nếu có
        });
    }
    

    return (
    <>
        <h1>{value}</h1>
        <button onClick={()=> {
            setValue(value+ 2)
        }}>Change word</button>
    </>
    )
}
