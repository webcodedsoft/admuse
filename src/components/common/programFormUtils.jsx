import Form from './form';

class ProgramFormUtils extends Form {
    handleMultiSelectValueChange = (selected, name = null) => {
        let data = [];
        Array.from(selected).forEach(v => data.push(v.value));
        this.setState({data: {...this.state.data, [name]: data}});
    };
}

export default ProgramFormUtils;