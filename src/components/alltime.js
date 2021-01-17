import { Grid } from '@material-ui/core';
import React from 'react';
import DashCard from './DashCard';


const AllTime = (props) => {

    const { l, r, m } = props;
    
    return (
        <Grid container direction='row' spacing={1} >
            <Grid item xs={12} sm={6} >
               <DashCard t='Positive Cases' 
                        ll={l.loc} 
                        rl={r.loc} 
                        rs={r.amn}
                        ls={l.amn}
                        isd={false} /* ld={-10}  rd={14} isd={true} *//> 
            </Grid>
            <Grid item xs={12} sm={6} >
                <DashCard t='Deaths'
                    ll={l.loc}
                    rl={r.loc}
                    rs={r.amd}
                    ls={l.amd}
                    isd={false} /* ld={-10}  rd={14} isd={true} */ />
            </Grid>
            <Grid item xs={12} sm={6} >
                <DashCard t='Tests'
                    ll={l.loc}
                    rl={r.loc}
                    rs={r.amt}
                    ls={l.amt}
                    isd={false} /* ld={-10}  rd={14} isd={true} */ />
            </Grid>
            <Grid item xs={12} sm={6} >
                <DashCard t='Deathrate (%)'
                    ll={l.loc}
                    rl={r.loc}
                    rs={r.adr}
                    ls={l.adr}
                    isd={false} /* ld={-10}  rd={14} isd={true} */ />
            </Grid>
        </Grid> 

    );
};

export default AllTime;
