import React from 'react'

function Header() {

	return (
	    <thead>
        <input type="reset" name="reset" className = "reset" value="reset"/>

            <tr className = "head">
                <th className = "one">
                    <div className = "th first">№ п\п<button className = "btn1"> </button>
                    </div>
                </th>
                <th className = "two">
                    <div className = "th second">Время прибора<button className = "btn2"> </button>
                    </div>
                </th>
                <th className = "three">
                    <div className = "th third">Оператор<button className = "btn3"> </button>
                    </div>
                </th>
                <th className = "four">
                    <div className = "th fourth">Прибор<button className = "btn4"> </button>
                    </div>
                </th>
                <th className = "five">
                    <div className = "th fifth">Описание<button className = "btn5"> </button>
                    </div>
                </th>
                <th className = "six">
                    <div className = "th sixth">Адрес прибора<button className = "btn6"> </button>
                    </div>
                </th>
                <th className = "seven">
                    <div className = "th seventh">Зона<button className = "btn7"> </button>
                    </div>
                </th>
                <th className = "eight">
                    <div className = "th">Код события<button className = "btn8"> </button>
                    </div>
                </th>
            </tr>
        </thead>
	)
}

export default Header
