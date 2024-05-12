import React from 'react'
import { CircleLoader } from "react-spinners"
import "./Loader.scss"
import { useLoading } from '../../context/AuthContext';
import { colors } from '../../utils/config';
function Loader() {
    const {loading} = useLoading();
    if(loading) {
        return (
            <div className="spinner-overlay" style={{ display: loading ? 'flex' : 'none', zIndex: 999999999999999}}>
            <div className="spinner-container">
              <CircleLoader color={`{${colors.primary}}`} />
            </div>
          </div>
          )
    }

}

export default Loader