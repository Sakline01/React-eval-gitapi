import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 400
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function OutlinedCard({ url, create, desc, name }) {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {name}
                </Typography>
                <Typography variant="h5" component="h2">
                    {name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    created at:{create}
                </Typography>
                <Typography variant="body2" component="p">
                    {desc}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href={url} >Repository</Button>
            </CardActions>
        </Card>
    );
}
