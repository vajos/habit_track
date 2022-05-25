import React, {useState} from 'react';
import {
    Text,
    View, Dimensions,

} from 'react-native';

import {LogBox} from 'react-native';

LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

import Orientation, {
    useOrientationChange,
    useDeviceOrientationChange,
    useLockListener,
} from 'react-native-orientation-locker';
import EStyleSheet from "react-native-extended-stylesheet";

import {
    orientation as sensor_orientation,
    setUpdateIntervalForType,
    SensorTypes,
} from 'react-native-sensors';
import {List, Item} from 'linked-list'

setUpdateIntervalForType(SensorTypes.orientation, 100);


const ActualGame = ({navigation, route}) => {

    const [isLocked, setLocked] = useState();
    const [orientation, setOrientation] = useState();
    const [deviceOrientation, setDeviceOrientation] = useState();
    const [lock, setLock] = useState();

    let [background_color, setBackground_color] = useState("blue");
    let [middle_text, setmiddle_text] = useState("Johnny Depp");
    let [phone_horizontal, setphone_horizontal] = useState(false);
    let [count_correct_words, setcount_correct_words] = useState(0);
    let [x, setX] = useState(0.0);
    x = x.toFixed();
    let [y, setY] = useState(0.0);
    y = y.toFixed();
    let [z, setZ] = useState(0.0);
    z = z.toFixed();


    function quaternionToAngles(q) {
        let data = q;

        let ysqr = data.y * data.y;
        let t0 = -2.0 * (ysqr + data.z * data.z) + 1.0;
        let t1 = +2.0 * (data.x * data.y + data.w * data.z);
        let t2 = -2.0 * (data.x * data.z - data.w * data.y);
        let t3 = +2.0 * (data.y * data.z + data.w * data.x);
        let t4 = -2.0 * (data.x * data.x + ysqr) + 1.0;

        t2 = t2 > 1.0 ? 1.0 : t2;
        t2 = t2 < -1.0 ? -1.0 : t2;

        const toDeg = 180 / Math.PI;

        const euler = {};
        euler.pitch = Math.asin(t2) * toDeg;
        euler.roll = Math.atan2(t3, t4) * toDeg;
        euler.yaw = Math.atan2(t1, t0) * toDeg;

        return euler;
    }


    const [time, setTime] = React.useState(60);
    const timerRef = React.useRef(time);


    React.useEffect(() => {

        const timerId = setInterval(() => {
            timerRef.current -= 1;
            if (timerRef.current < 0) {
                clearInterval(timerId);
            } else {
                setTime(timerRef.current);
            }
        }, 1000);

        const subscription = sensor_orientation.subscribe(({qx, qy, qz, qw}) => {

                let q = {
                    "x": qx,
                    "y": qy,
                    "z": qz,
                    "w": qw
                };

                let euler = quaternionToAngles(q);

                setZ(euler.yaw);
                setY(euler.pitch);
                setX(euler.roll);
            }
        );

        return () => {
            clearInterval(timerId);
            subscription.unsubscribe();
            Orientation.lockToPortrait();
        };
    }, []);


    const words = ["Laufen", "Schlafen", "Rennen", "Poledance",
        "Skispringer",
        "Blähungen",
        "Schaukelpferd",
        "Seekuh",
        "Baby",
        "Zahnarzt"];
    let [current_indexx, setcurrent_index] = React.useState(0);


    React.useEffect(() => {
        return () => {
            let horizontal = (y >= 75 && y <= 90);
            if (horizontal) {
                setphone_horizontal(true);
                setBackground_color("purple");
                setmiddle_text(words[current_indexx]);
            } else if (phone_horizontal && (y >= 20 && y <= 60)) {
                if (Math.abs(x) > 170) {

                    setBackground_color("green");
                    setmiddle_text("Richtig");
                    setcount_correct_words(count_correct_words + 1);
                    setphone_horizontal(false);
                    setcurrent_index(current_indexx + 1);



                } else if (Math.abs(x) < 10) {

                    setBackground_color("red");
                    setmiddle_text("Überspringe Wort");
                    setphone_horizontal(false);
                    setcurrent_index(current_indexx + 1);
                }
            } else if (!phone_horizontal) {
                setBackground_color("purple");
                setmiddle_text("Legen Sie das Telefon auf ihre Stirn, um fortzufahren");
            }

        };
    }, [y, x, z]);


    useOrientationChange((o) => {
        setOrientation(o);
    });

    useDeviceOrientationChange((o) => {
        setDeviceOrientation(o);
    });

    useLockListener((o) => {
        setLocked(o);
    });


    Orientation.lockToLandscapeRight();


    return (
        <View style={[styles.parentView, {
            backgroundColor: background_color
        }]}>
            <View style={styles.childView}>
                <Text style={styles.test}></Text>
                <Text style={styles.top}>{time}'</Text>
            </View>
            <Text style={styles.mid}>{middle_text}</Text>
            <Text style={styles.bottom}>{count_correct_words} Wörter Richtig</Text>
        </View>
    );
}


const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});


const styles = EStyleSheet.create({
    parentView: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    },
    test: {},
    childView: {
        paddingTop: "15rem",
        flexDirection: "row",
        justifyContent: "flex-start",

    },
    top: {
        fontSize: "15rem"
    },
    mid: {
        fontSize: "30rem"
    },
    bottom: {
        paddingBottom: "15rem",
        fontSize: "15rem"
    }
});
export default ActualGame;
