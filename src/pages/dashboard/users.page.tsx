import { Link } from "react-router-dom"
import Avatar from "../../components/dashboard/Avatar"
import Table from "../../components/dashboard/Table"

function UsersPage() {
  return (
    <section>
        <div className="card bg-base-100 rounded-box">
            <div className="card-title flex flex-col md:flex-row justify-between items-center p-4">
                <h2 className="section-title my-4">Users</h2>
                <div className="join xs:join-vertical md:join-horizontal">
                    <div>
                        <div>
                        <input className="input input-bordered join-item" placeholder="Search"/>
                        </div>
                    </div>
                    <div className="indicator w-full">
                        <button className="btn join-item w-full">Search</button>
                    </div>
                </div>
            </div>
            <div className='card-body px-4 md:px-6 overflow-x-scroll py-4'>
                <Table titles={["User","Email","Role","Account","Options"]}>
                        {[2,54,8,3,4,5,7,78,9,996,974,4435,543].map(e => <Table.tr key={e}>
                                <Table.td>
                                    <Avatar img="https://avatars.githubusercontent.com/u/54208900?v=4" title="Mohamed Abdelrahman" desc="Egypt"/>
                                </Table.td>
                                <Table.td>
                                    mohamed@mail.com
                                </Table.td>
                                <Table.td>
                                    <span className="badge badge-sm">admin</span>
                                    <span className="badge badge-sm">writer</span>
                                    <span className="badge badge-sm">user</span>
                                </Table.td>
                                <Table.td>
                                    <Link className="btn btn-xs" to={`/profile/${e}`} >View</Link>
                                </Table.td>
                                <Table.td className="flex gap-1">
                                    <button className="btn btn-warning btn-xs">Block</button>
                                    <button className="btn btn-error btn-xs">Delete</button>
                                </Table.td>
                            </Table.tr>
                        )}
                </Table>
            </div>
        </div>
    </section>
  )
}

export default UsersPage