import React, { Children } from 'react';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import AdminFooter from './AdminFooter';

const AdminLayout = ({children}) => {
    return (
        <>
        <AdminHeader/>
        <AdminSidebar/>
        {children}
        <AdminFooter/>
        </>
    );
};

export default AdminLayout;