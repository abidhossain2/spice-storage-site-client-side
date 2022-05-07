import React from 'react';
import { Table } from 'react-bootstrap';
import Header from '../Header/Header';
import './Blogs.css'

const Blogs = () => {
    return (
        <>
            <Header></Header>
            <div>
                <h2>Differences between Javascript and NodeJs</h2> <br />

                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Javascript</th>
                            <th>NodeJs</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>For using javascript programmer should use js file</td>
                            <td>
                                For using nodejs programmer should install it in his/her computer.
                            </td>

                        </tr>
                        <tr>
                            <td>2</td>
                            <td>
                                Javascript can run in browser through engine. Such as spidermonkey(Firefox), Js core (Safari), V8 (Google Chrome)
                            </td>
                            <td>
                                NodeJs only use V8 engine which is the build in engine of google chrome.
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Javascript helps to create dynamic HTML pages with some interactice effect on web page, mobile application etc.</td>

                            <td> NodeJs helps javascript to run on a server side.</td>

                        </tr>
                        <tr>
                            <td>4</td>
                            <td>
                                Javascript written in C++
                            </td>
                            <td>
                                Nodejs written in javascript, C, C++
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>
                                All javascript apps is not nodejs apps.
                            </td>
                            <td>
                                Nodejs use javascript as their programming language. So all nodejs apps is  javascript apps.
                            </td>

                        </tr>
                    </tbody>
                </Table>
                <h2>When we should use NodeJs</h2>
                <p>
                    Node Js uses an event-driven, non-blocking I/O model which makes it lightweight and powerful. There are two design pattern in programming. One is synchronous and other one is asynchronous(non blocking I/O). By default Node Js asynchronous. So it will give the output of the work that will be completed. It uses Single Threaded Event Loop architecture to handle multiple concurrent clients.  When multiple request send to server client does not have to wait for the response. In this pupose we use nodejs.
                </p>
                <h2>When we use should Mongodb</h2>
                <p>
                    Mongodb is useful for some cases where information to be put away is semi-structured or unstructured. Information put away in  key/value pair. For example we can say that, XML files. Mongodb does not support row column information structure. The finest example is facebook information, that incorporates, content records, strings, pictures etc.
                </p>
                <h2>Differences between SQL and NoSQL</h2>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>SQL</th>
                            <th>NoSQL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>SQL stands for Structured Query Language</td>
                            <td>
                            NoSQL stands for Non Structured Query Language
                            </td>

                        </tr>
                        <tr>
                            <td>2</td>
                            <td>
                            SQL database  allows you to store data in a sturctered form.
                            </td>
                            <td>
                             NoSQL databases don't use tabular relationships.
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>SQL database : MySQL, Oracle, PostgreSQL, and Microsoft SQL Server.</td>

                            <td>NoSQL database : MongoDB, BigTable, Redis, RavenDB Cassandra, HBase, Neo4j, and CouchDB.</td>

                        </tr>
                        <tr>
                            <td>4</td>
                            <td>
                                Adding a new property may require altering schemas.
                            </td>
                            <td>
                               New properties can be added easily.
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>
                            Scaling is typically achieved vertically with data partioned.
                                
                            </td>
                            <td>
                                Scaling is typically achieved horizontally with data partioned.
                            </td>

                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default Blogs;