import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EMStyle.css';
import {Link} from 'react-router-dom';
import {MdPageview} from 'react-icons/md';
import {Jumbotron, Table,Navbar,Nav,Card,Form,FormControl,Button,InputGroup,Tooltip,OverlayTrigger} from 'react-bootstrap';
import { FaUsers, FaUserEdit, FaListAlt, FaChalkboardTeacher, FaFastForward, FaFastBackward, FaStepForward, FaStepBackward } from 'react-icons/fa';
import { GrAscend, GrDescend } from 'react-icons/gr';
import { useTable, useSortBy, usePagination, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table';

function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
}) {
    /*const count = preGlobalFilteredRows.length*/
    const [value, setValue] = React.useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    }, 200)

    return (
        <span>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" 
                value={value || ""}
                onChange={e => {
                setValue(e.target.value);
                onChange(e.target.value);
                }}
                />
                <Button variant="outline-light">Search</Button>
            </Form>
        </span>
    )
}

function DefaultColumnFilter({
    column: { filterValue, preFilteredRows, setFilter },
}) {
    const count = preFilteredRows.length

    return (
        <input
            className="form-control"
            value={filterValue || ''}
            onChange={e => {
                setFilter(e.target.value || undefined)
            }}
            placeholder={`Search ${count} records...`}
        />
    )
}

function DisplayTable({columns,data}){
    const defaultColumn = React.useMemo(
        () => ({
            // Default Filter UI
            Filter: DefaultColumnFilter,
        }),
        []
    )
    const{

        getTableProps,getTableBodyProps,page,prepareRow,canPreviousPage,
        canNextPage,pageOptions,pageCount,gotoPage,nextPage,previousPage,setPageSize,
        preGlobalFilteredRows,setGlobalFilter,state,headerGroups,
        state:{pageIndex,pageSize}
    }=useTable({
        columns,data,defaultColumn,initialState:{pageIndex:0,pageSize:5}
    },useFilters,useGlobalFilter,useSortBy,usePagination)

    const pageNumCss = {
        width: "75px",
        border: "1px solid #17A2B8",
        color: "white",
        textAlign: "center",
        fontWeight: "bold"
    };

    const regTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>Employee Data</Tooltip>
    );

    const jobTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>Job Posted Data</Tooltip>
    );

    const quaTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>Qualifiers Data</Tooltip>
    );

    const viewTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>View</Tooltip>
    );

    return(
        <Jumbotron fluid>
            <Card bg="teal">
                <Card.Header>
                    <Navbar collapseOnSelect expand="lg" className="bar" variant="dark">
                        <FaUsers className="like"/>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <OverlayTrigger placement="bottom" delay={{show:250,hide:400}} overlay={regTooltip}>
                                    <Link to={"/Registration"} className="like"><FaUserEdit className="fa"/></Link>
                                </OverlayTrigger>
                                
                                <OverlayTrigger placement="bottom" delay={{show:250,hide:400}} overlay={jobTooltip}>
                                    <Link to={"/JobListing"} className="like"><FaListAlt title="Job Listing" className="fa"/></Link>
                                </OverlayTrigger>
                                
                                <OverlayTrigger placement="bottom" delay={{show:250,hide:400}} overlay={quaTooltip}>
                                    <Link to={"/Qualifiers"} className="like"><FaChalkboardTeacher title="Qualifiers" className="fa"/></Link>
                                </OverlayTrigger>        
                            </Nav>
                            <Nav>
                                <GlobalFilter preGlobalFilteredRows={preGlobalFilteredRows} globalFilter={state.globalFilter} setGlobalFilter={setGlobalFilter} />
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Card.Header>
                <Card.Body>
                    <Table responsive="xl" striped bordered hover variant="dark" className="table" {...getTableProps()}>
                        <thead>
                            {headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps()}>
                                            {column.render('Header')}
                                            <span>{
                                                column.isSorted ?
                                                column.isSortedDesc ?
                                                <GrDescend/> :
                                                <GrAscend/> :
                                                ''    
                                            }</span>
                                        </th>
                                    ))}
                                    <th>Action</th>
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {page.map((row, index) => {
                                prepareRow(row)
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map(cell => {
                                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        })}
                                        <td>
                                            <OverlayTrigger placement="bottom" delay={{show:250,hide:400}} overlay={viewTooltip}>
                                                <Link to={`JobDetail/${index+1}`} className="btn btn-outline-light btn-sm"><MdPageview/></Link>
                                            </OverlayTrigger>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Card.Body>
                <Card.Footer>
                    <div style={{"float":"left","color":"white"}}>
                        Showing Page {pageIndex + 1} of {pageOptions.length}
                    </div>
                    <div style={{"float":"right", "color":"white"}}>
                        <InputGroup>
                            <select className="form-control bg-dark text-white" value={pageSize} onChange={e => {setPageSize(Number(e.target.value))}} style={{ width: '100px', height: '38px' }}>
                                {[5, 10, 20, 30, 40, 50].map(pageSize => (
                                    <option key={pageSize} value={pageSize}> Show {pageSize}</option>
                                ))}
                            </select>
                            <InputGroup.Prepend>
                                <Button type="button" variant="outline-light" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                                    <FaFastBackward/>First
                                </Button>
                                <Button type="button" variant="outline-light" onClick={() => previousPage()} disabled={!canPreviousPage}>
                                    <FaStepBackward/>Prev
                                </Button>
                            </InputGroup.Prepend>
                            <FormControl 
                                style={pageNumCss} 
                                className={"bg-dark"} 
                                type="number" 
                                defaultValue={pageIndex+1} 
                                onChange={e=>{
                                const page = e.target.value ? Number(e.target.value) - 1 : 0
                                gotoPage(page)}} />
                            <InputGroup.Prepend>
                                <Button type="button" variant="outline-light" onClick={() => nextPage()} disabled={!canNextPage}>
                                    <FaStepForward/>Next
                                </Button>
                                <Button type="button" variant="outline-light" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                                    <FaFastForward/>Last
                                </Button>
                            </InputGroup.Prepend>
                        </InputGroup>
                    </div>
                </Card.Footer>   
            </Card>
        </Jumbotron>
    )
}

function JobListing() {
    const columns = React.useMemo(()=>[
        {
            Header:'Sl.No',
            accessor:'id'
        },
        {
            Header:'Designation',
            accessor:'designation'
        },
        {
            Header:'Company',
            accessor:'company'
        },
        {
            Header:'Location',
            accessor:'location'
        },
        {
            Header:'Salary(LPA)',
            accessor:'salary'
        },
        {
            Header:'Experience',
            accessor:'experience'
        }
    ],[])
    const[list,setData] = useState([]);
    useEffect(()=>{loadUsers();},[]);
    const loadUsers = async() => {
        const result = await axios.get("http://localhost:2020/joblist");
        setData(result.data);
    }
    
    return(
        <DisplayTable columns={columns} data={list} />
    )
};

export default JobListing;