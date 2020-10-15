import React, { useEffect } from "react";
import { connect } from "react-redux";
import {Redirect} from 'react-router-dom';

// Actions
import { fetchTreasure } from "./redux/actions";

const Treasure = props => {

  useEffect(() => {
    props.getTreasure();
  },[])
  
  const rows = props.treasure.map(thing => (
    <tr key={thing.name} className="table-warning">
      <td>{thing.name}</td>
    </tr>
  ));
  if (!props.user) return <Redirect to='/signup' />;
  return (
    <div className="mt-5 mx-auto col-6 text-center">
      <h1>Treasure</h1>
      <table style={{ width: "100%" }}>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}


const mapStateToProps = state => ({
  treasure: state.things.private,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  getTreasure: () => dispatch(fetchTreasure())
});

export default connect(mapStateToProps, mapDispatchToProps)(Treasure);
