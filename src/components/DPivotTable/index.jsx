import React from 'react';
import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';
import TableRenderers from 'react-pivottable/TableRenderers';
import createPlotlyRenderers from 'react-pivottable/PlotlyRenderers';
import Plot from 'react-plotly.js';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import styles from './style.js'
import {data} from './sample.js'
// create Plotly renderers via dependency injection
const PlotlyRenderers = createPlotlyRenderers(Plot);

class DPivotTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = props;
    }
    render() {
        const { classes } = this.props;
        return (
            <Card className={classes.card}>
                <CardContent>
                    <PivotTableUI
                        data={data}
                        onChange={s => this.setState(s)}
                        renderers={Object.assign({}, TableRenderers, PlotlyRenderers)}
                        {...this.state}
                    />
                </CardContent>
                <CardActions>
                    <Button size="small" color='secondary'>Learn More</Button>
                </CardActions>
            </Card>

        );
    }
}

DPivotTable.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  

export default withStyles(styles)(DPivotTable);;