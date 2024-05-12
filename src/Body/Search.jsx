import React, { useState } from 'react';
import './Search.css';
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { UserOutlined} from '@ant-design/icons';

// DATE PICKER COMPONENT
function Search() {
    const history = useNavigate();
    const [startDate, setStartDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: startDate, // Keep the end date same as start date
        key: "selection",
      };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
    }

    return (
        <div className='search'>
            <div className='search-wrap'>
            <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
                showDateDisplay={false} // Hide the end date display
            />
            <h2>
                 Number of guests <UserOutlined />
            </h2>
            <input min={0} defaultValue={2} type="number" />
            <Button onClick={() => history.push('/search')}>Search Airbnb</Button>
            </div>
        </div>
    )
}

export default Search;
