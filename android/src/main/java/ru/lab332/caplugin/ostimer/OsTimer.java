package ru.lab332.caplugin.ostimer;

import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginResult;

import java.util.Timer;
import java.util.TimerTask;


public class OsTimer {
    PluginCall timerCallback;
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
                //JSONObject message = new JSONObject();
                try {
                    //message.put("tick", String.valueOf(mSecondPassed));
                    PluginResult result = new PluginResult();
                    //result.setKeepCallback(true);
                    result.put("tick",mSecondPassed);
                    timerCallback.setKeepAlive(true);
                    timerCallback.successCallback(result);

                } catch (Exception e) { // this shouldn't happen
                    e.printStackTrace();
                }
            }
            System.out.println("Seconds passed: " + mSecondPassed);
        }
    };

    public void start(PluginCall pluginCall, long delay,long period) {
        this.timerCallback = pluginCall;
        this.period = period;
        this.delay=delay;
        mtimer.scheduleAtFixedRate(mTask, delay, period);
    }
    public void stop(){
        mtimer.cancel();
        timerCallback.reject("stop");
    }
}