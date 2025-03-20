

export const Members = (props) => {
  return (
    // we can style using class name
    <div className="maindiv">
        <table>

            {/* table row */}
            <tr>
                 {/* table header it is always bold */}
                <th>
                    Name
                </th>

                {/* table data for this data we can call from script */}

               
                <td>{props.name}</td>
            </tr>

            <tr>
                <th>Age</th>
                <td>{props.age}</td>
            </tr>

            <tr>
                <th>isMarried</th>
                <td>{props.isMarried?"Yes":"No"}</td>
            </tr>
                

            
        </table>
    </div>
  )
}

{/* we have the default properties */}
    {/* it will use as iif we not pass any one argument it will conisider the default value */}

Members.defaultProps={
    name :"No Name",
    age: 0
  }
