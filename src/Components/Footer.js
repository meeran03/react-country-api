import { Avatar, Card, CardContent,Typography } from '@material-ui/core';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import React from 'react'

function Footer(props) {
    let data = props.data.filter(item => item.area !=null)
    var min = data.find((item) => item.area == Math.min(...data.map(item => item.area)));
    var max = data.find((item) => item.area == Math.max(...data.map(item => item.area)));
    let sum=0;
    let total=0;
    props.data.filter(item => item.population!= null).map(item => {
        sum += item.population
        total++;
    })

    return (
        <Card style={{marginTop : 30}} elevation={13} >
            <CardContent>
                <Typography gutterBottom variant="h6" >
                    Country Statistics
                </Typography>

                <div style={styles.list} >
                    <div style={styles.listItem} >
                        <Typography>
                            Country With Max Area
                        </Typography>
                        
                        <div style={{display : "flex",alignItems : "center"}} >
                            <Avatar variant="rounded" style={{marginRight : 20}} src={max && max.flag} />
                            <Typography>
                                {max && max.name}
                            </Typography>
                        </div>
                    </div>


                    <div style={styles.listItem} >
                        <Typography>
                            Country With Min Area
                        </Typography>
                        
                        <div style={{display : "flex",alignItems : "center"}} >
                            <Avatar variant="rounded" style={{marginRight : 20}} src={min && min.flag} />
                            <Typography>
                                {min && min.name}
                            </Typography>
                        </div>
                    </div>


                    <div style={styles.listItem} >
                        <Typography>
                            Average Population
                        </Typography>
                        
                        <div style={{display : "flex",alignItems : "center"}} >
                            <Typography gutterBottom variant="subtitle" >
                                {sum && sum/total}
                            </Typography>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default Footer

const styles = {
    list : {
        alignItems : "center",
        justifyContent : 'center',
        display :  "flex", 
        flexDirection : "column"
    },
    listItem : {
        display : "flex", 
        justifyContent : "space-between",
        width: '60%',
        alignSelf : "center",
        alignItems : "center"
    }

}