import { Avatar, Card, CardContent,Typography } from '@material-ui/core';
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

                <div className='list' >
                    <div className='listItem' >
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


                    <div className='listItem' >
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


                    <div className='listItem' >
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
