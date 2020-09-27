import React from 'react'

import {AppBar, Toolbar, Typography} from '@material-ui/core'

const Header = () =>
    <AppBar position="static">
        <Toolbar style={{backgroundColor:'darkblue'}}>
            <Typography variant="h6">
                FullRoom
            </Typography>
        </Toolbar>
    </AppBar>

export default Header