const styles = theme => ({
    appBar: {
        position: 'relative',
    },
    flex: {
        flex: 1,
    },
    paper: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        margin: 30,
        // display: 'flex',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: '30px',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
    },
    radio: {
        display: 'flex',
        justifyContent: 'start',
    },
    input: {
        width: '83%',
        paddingLeft: 20,
    },
    marginInput: {
        marginLeft: '50px',
    },
    button: {
        margin: theme.spacing.unit,
    },
    portletFooter: {
        paddingLeft: theme.spacing.unit * 3,
        paddingRight: theme.spacing.unit * 3,
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
});
export default styles;