import React, {Component} from "react";


class TableHead extends Component {
    render() {
        return (
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Age</th>
                    <th>Gender</th>                    
                </tr>
            </thead>
        )
    }
}


const TableBody = (props) => {
    console.log(props)
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>{row.age}</td>
                <td>{row.gender}</td>
                <td><button className="btn1" onClick={() => props.removeCharacter(index)}>Delete</button></td>
            </tr>
        )
    })
    return <tbody>{rows} </tbody>
}


const Table = (props)  => {
        const {characterData, removeCharacter} = props

        return(
            <div id="myTable">
                <table>  
                    <TableHead/>
                    <TableBody characterData={characterData} removeCharacter={removeCharacter}/>                     
                </table>
            </div>
        )
}
export default Table