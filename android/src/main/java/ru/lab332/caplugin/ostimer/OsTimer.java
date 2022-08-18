package ru.lab332.caplugin.ostimer;

import java.util.Timer;
import java.util.TimerTask;



public class OsTimer {

    OsTimerCallback timerCallback;
    long period = 1000;
    long delay=1000;
    private Timer mtimer = new Timer();
    private int mSecondPassed = 0;

    public OsTimer() {
    }


    private TimerTask mTask = new TimerTask() {

        @Override
        public void run() {
            mSecondPassed++;

            if (timerCallback != null) {
                try {
                    timerCallback.handle(mSecondPassed);

                } catch (Exception e) { // this shouldn't happen
                    e.printStackTrace();
                }
            }
            System.out.println("Seconds passed: " + mSecondPassed);
        }
    };

    public void start(OsTimerCallback pluginCall, long delay, long period) {
        this.timerCallback = pluginCall;
        this.period = period;
        this.delay=delay;
        //if (mtimer!=null) mtimer.cancel();
        mtimer.scheduleAtFixedRate(mTask, delay, period);
    }
    public void stop(){
        mtimer.cancel();
    }
}