import { cloneElement } from "react"
import { Pressable, Text, View, StyleSheet } from "react-native"

function Bottompanel({Score, ResetFunction, GameEnd, setGameEnd, XTurn}) {
    return (
        <View>
            <ScoreDiv Score={Score}/>
            <TurnIndicator XTurn={XTurn}/>
            <TryAgain ResetFunction={ResetFunction} GameEnd={GameEnd} setGameEnd={setGameEnd}/>
        </View>
    )
}

function ScoreDiv({Score}) {
    return (
        <View style={BottompanelStyles.ScoreContainer}>
            <View style={BottompanelStyles.ScoreElements}>
                <Text style={BottompanelStyles.ScoreElementsText}>X</Text>
                <Text style={BottompanelStyles.ScoreElementsText}>{Score.XWins}</Text>
            </View>
            <View style={BottompanelStyles.ScoreElements}>
                <Text style={BottompanelStyles.ScoreElementsText}>O</Text>
                <Text style={BottompanelStyles.ScoreElementsText}>{Score.OWins}</Text>
            </View>
            <View style={BottompanelStyles.ScoreElements}>
                <Text style={BottompanelStyles.ScoreElementsText}>Draws</Text>
                <Text style={BottompanelStyles.ScoreElementsText}>{Score.Draws}</Text>
            </View>
        </View>
    )
} 

function TurnIndicator({XTurn}) {
    if (XTurn) {
        return (
            <View style={BottompanelStyles.TurnIndicatorContainer}>
                <Text style={BottompanelStyles.TurnIndicatorCurrentTurnElement}>X</Text>
                <Text style={BottompanelStyles.TurnIndicatorElement}>O</Text>
            </View>
        )
    } else {
        return (
            <View style={BottompanelStyles.TurnIndicatorContainer}>
                <Text style={BottompanelStyles.TurnIndicatorElement}>X</Text>
                <Text style={BottompanelStyles.TurnIndicatorCurrentTurnElement}>O</Text>
            </View>
        )
    }
}

function TryAgain({ResetFunction, GameEnd, setGameEnd}) {
    function Handler() {
        ResetFunction('Grid')
        setGameEnd(false)
    }

    if (GameEnd) {
        return (
            <View style={BottompanelStyles.TryAgainBtnContainer}>
                <Pressable onPress={Handler} style={BottompanelStyles.TryAgainBtn}>
                    <Text style={BottompanelStyles.TryAgainBtnText}>Try Again</Text>
                </Pressable>
            </View>
        )
    }
}

const BottompanelStyles = StyleSheet.create({
    ScoreContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },

    ScoreElements: {
        paddingRight: 20, 
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: 'center'
    }, 
    
    ScoreElementsText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#71C9CE'
    },  

    TurnIndicatorContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: '#71C9CE',
    },

    TurnIndicatorElement: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        color: '#E3FDFD'
    },  

    TurnIndicatorCurrentTurnElement: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        color: '#71C9CE',
        borderRadius: 100,
        backgroundColor: '#E3FDFD',
    },

    TryAgainBtnContainer: {
    },   

    TryAgainBtn: {
        alignItems: 'center'
    },

    TryAgainBtnText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 20,
        backgroundColor: '#71C9CE',
        color: '#E3FDFD'
    }
})

export default Bottompanel