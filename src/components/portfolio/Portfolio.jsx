import React, { useState } from 'react';
import "./portfolio.css";
import Menu from './Menu';

const Portfolio = () => {
    const [items, setItems] = useState(Menu);
    const filterItem = (categoryItem) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === categoryItem;
        })

        setItems(updatedItems);
    }

    return (
        <section className="work container section" id='portfolio'>
            <h2 className="section_title">Portfolio</h2>

            <div className="work_filters">
                <span className="work_item" onClick={() => setItems(Menu)}>Everything</span>
                <span className="work_item" onClick={() => filterItem("IoT/Hardware")}>IoT/Hardware</span>
                <span className="work_item" onClick={() => filterItem("Games")}>Games</span>
                <span className="work_item" onClick={() => filterItem("AI/Machine Learning")}>AI/Machine Learning</span>
                <span className="work_item" onClick={() => filterItem("Systems/Design")}>Systems/Design</span>
            </div>

            <div className="work_container grid">
                {items.map((elem) => {
                    const{id, image, title, category, link} = elem;
                    return (
                        <div className="work_card" key={id}>
                            <div className="work_thubnail">
                                <img src={image} alt="" className="work_img" />
                                <div className="work_mask"></div>
                            </div>

                            <span className="work_category">{category}</span>
                            <h3 className="work_title">{title}</h3>
                            <a href={link} className="work_button">
                                <i className="icon-link work_button-icon"></i>
                            </a>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Portfolio