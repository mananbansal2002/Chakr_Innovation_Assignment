import React from 'react';
import { FaBuilding } from 'react-icons/fa'; // Example: using Font Awesome icons
import companyData from './companies.json';

const AllCompanies = () => {
    // Repeat company data for 3 times
    const displayData = [...companyData, ...companyData, ...companyData];

    return (
        <div style={{ border: "0.1rem solid", borderRadius: "0.5rem" }}>
            <div>All Companies</div>
            <div style={{ overflowX: "auto" }}>
                <table className="w-full caption-bottom text-sm">
                    <thead>
                        <tr className="[&_tr]:border-b">
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Logo</th>
                            <th className="[&_tr]:border-b">Name</th>
                            <th className="[&_tr]:border-b">Domain Name</th>
                            <th className="[&_tr]:border-b">Account Owner</th>
                            <th className="[&_tr]:border-b">Creation Date</th>
                            <th className="[&_tr]:border-b">Linkedin</th>
                            <th className="[&_tr]:border-b">Address</th>
                            <th className="[&_tr]:border-b">Opportunities</th>
                            <th className="[&_tr]:border-b">Activities</th>
                            <th className="[&_tr]:border-b">People</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayData.map((value, idx) => (
                            <tr key={idx} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0"><img src={value.logo} width="50px" height="50px"></img></td>
                                <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">{value.name}</td>
                                <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">{value.domain}</td>
                                <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">{value.owner}</td>
                                <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">{new Date().toLocaleDateString()}</td>
                                <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">{value.linkedin}</td>
                                <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">{value.address}</td>
                                <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">{value.opportunities}</td>
                                <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">{value.activities}</td>
                                <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">Person</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AllCompanies;
