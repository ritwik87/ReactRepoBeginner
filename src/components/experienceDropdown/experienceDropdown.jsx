/* eslint-disable no-unused-expressions */
import React, { useState, useEffect, useContext } from "react";
import { TodosContext } from "../../todo-context";
const dropdownList = [{
    id: 1,
    value: 'Beginner'
},
{
    id: 2,
    value: 'Intermediate'
},
{
    id: 3,
    value: 'Expert'
}]
export const ExperienceDropdown = () => {
    const { selectedExpDropDownValue, setselectedExpDropDownValue } = useContext(TodosContext);
    const [dList, setDlist] = useState(dropdownList);
    const [selectedDropdownValue, setselectedDropdownValue] = useState(1);
    const [shouldHideAfterSelect, sethideAfterSelect] = useState(false);
    const setDropdownValue = (index) => {
        setselectedDropdownValue(parseInt(index.target.value));
        setselectedExpDropDownValue(parseInt(index.target.value));
        sethideAfterSelect(!shouldHideAfterSelect);
        localStorage.setItem('selectedDropdownValue', index.target.value);
        localStorage.setItem('showDropDown', '1');
    }

    useEffect(() => {
        async function setValue(params) {
            try {
                let value = await localStorage.getItem('showDropDown');
                let value1 = await localStorage.getItem('selectedDropdownValue');
                value === "1" ? sethideAfterSelect(true) : sethideAfterSelect(false);
                value1 != null ? (
                    setselectedDropdownValue(parseInt(value1)),
                    setselectedExpDropDownValue(parseInt(value1))
                ) : null;
            } catch (error) {

            }
        }
        setValue();
        setselectedDropdownValue(selectedExpDropDownValue);
    }, [selectedExpDropDownValue]);
    return (
        <>
            {shouldHideAfterSelect ? null :
                <div>
                    < select value={selectedDropdownValue}
                        onChange={e => setDropdownValue(e)}
                        className="browser-default custom-select" >
                        {
                            dList.map(({ value, id }) => <option value={id}>{value}</option>)
                        }
                    </select >
                </div>}
        </>
    );
}