import React from 'react'

class RendList extends React.Component{
    static allitems = [
        {id:'a', value:'apple'},
        {id:'b', value:'orange'},
        {id:'c', value:'grape'},
        {id:'d', value:'pear'},
    ]
    state = {items:[]}
    addItem =()=>{
        this.setState(({items}) => ({
            items:[
                ...items,
                RendList.allitems.find(i=>!items.includes(i),),
            ],
        }))
    }
    removeItem = item => {
        this.setState(({items})=>({
            items:items.filter(i=>i!==item),
        }))
    }
    render(){
        const {items} = this.state
        return (
            <div>
                <button disabled ={items.length >= RendList.allitems.length} onClick={this.addItem}>+</button>
                {items.map((i,index)=>(<div key={i.id}>
                    <button onClick={()=> this.removeItem(i)}>-</button>
                    {i.value}:
                    <input />
                </div>))}
            </div>
        )
    }
}

export default RendList
/*
{RendList.allitems.map(item=>(<div key={item.id}>{item.value}</div>))}
*/