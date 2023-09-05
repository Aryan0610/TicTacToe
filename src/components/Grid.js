import './Grid.css';

function Grid({XTurn, setXTurn, GridComponent, setGridComponent, Score, setScore, GameEnd, setGameEnd}) {

    function CheckForWin(updateGrid) {
        let count = 0

        let value
        if (XTurn) {
            value = 'X'
        } else {
            value = 'O'
        }

        /**count for how many grids have been filled */
        for (let i=0; i<9; i++) {
            if(GridComponent[i] !== '') {
                count++
            }
        }
        
        /**check if x or o wins in any 1 of the 8 possible ways */
        if ((updateGrid[0] === value && updateGrid[1] === value && updateGrid[2] === value) 
            || (updateGrid[3] === value && updateGrid[4] === value && updateGrid[5] === value)
            || (updateGrid[6] === value && updateGrid[7] === value && updateGrid[8] === value)
            || (updateGrid[0] === value && updateGrid[3] === value && updateGrid[6] === value)
            || (updateGrid[1] === value && updateGrid[4] === value && updateGrid[7] === value)
            || (updateGrid[2] === value && updateGrid[5] === value && updateGrid[8] === value)
            || (updateGrid[0] === value && updateGrid[4] === value && updateGrid[8] === value)
            || (updateGrid[2] === value && updateGrid[4] === value && updateGrid[6] === value)) {

                /**if x wins the give a point to x or else give a point to o */
                let ScoreComponent = Score
                if (value === 'X') {
                    ScoreComponent.XWins++
                    setGameEnd(true)
                } else {
                    ScoreComponent.OWins++
                    setGameEnd(true)
                }

                setScore(ScoreComponent)
        } else {
            /**if all the grids have been filled and the game has not ended then result in a draw */
            if (count === 8 && GameEnd === false) {
                let ScoreComponent = Score
                ScoreComponent.Draws++
                setScore(ScoreComponent)
                setGameEnd(true)
            }
        }
    }

    function handler(i) {
        let value
        if (XTurn) {
            value = 'X'
        } else {
            value = 'O'
        }

        const updateGrid = GridComponent.map(function(item, j) {    
            if (i === j && GameEnd === false) {
                if (!item) {
                    setXTurn(!XTurn)
                    return value
                } else {
                    return item
                }
            } else {
                return item
            }
        })
    
        setGridComponent(updateGrid)
        CheckForWin(updateGrid)
    }

    return (
        <GridTemp GridComponent={GridComponent} setGridComponent={setGridComponent} handler={handler}/>
    )
}

function GridTemp({GridComponent, handler}) {
    let Row1 = GridComponent.map(function(item, i) {
        if (i<3) {
            return (
                <button key={i} className="GridElement" onClick={() => {handler(i)}}>
                    {item}
                </button>
            )
        }
    })

    let Row2 = GridComponent.map(function(item, i) {
        if (2<i && i<6) {
            return (
                <button key={i} className="GridElement" onClick={() => {handler(i)}}>
                    {item}
                </button>
            )
        }
    })

    let Row3 = GridComponent.map(function(item, i) {
        if (5<i && i<9) {
            return (
                <button key={i} className="GridElement" onClick={() => {handler(i)}}>
                    {item}
                </button>
            )
        }
    })

    return (
        <div className="GridContainer">
            <div className="GridContainerRow">{Row1}</div>
            <div className="GridContainerRow">{Row2}</div>
            <div className="GridContainerRow">{Row3}</div>
        </div>
    )
}

export default Grid