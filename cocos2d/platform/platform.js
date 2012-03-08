/****************************************************************************
 Copyright (c) 2010-2012 cocos2d-x.org
 Copyright (c) 2008-2010 Ricardo Quesada
 Copyright (c) 2011      Zynga Inc.

 http://www.cocos2d-x.org

 Created by JetBrains WebStorm.
 User: wuhao
 Date: 12-3-8

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/


var CC = CC = CC || {};
CC.cc_timeval = CC.Class.extend({
    tv_sec:0,//seconds
    tv_usec:0//microseconds
});

CC.CCTime = {};
CC.CCTime.gettimeofdayCocos2d = function()
{
    var timeval = new CC.cc_timeval();
    var tmp = Date.now();
    timeval.tv_usec = (tmp % 1000)*1000;
    timeval.tv_sec = MAth.floor(tmp/1000);
    return timeval;
};
CC.CCTime.now = function()//alias to Date.now()
{
    return Date.now();
};
CC.CCTime.timersubCocos2d = function(start, end)
{
    if(! out || !start ||!end)
    {
        return;
    }
    if(start instanceof CC.cc_timeval && end instanceof CC.cc_timeval)
    {
        var out = new CC.cc_timeval();
        out.tv_sec = end.tv_sec - start.tv_sec;
        out.tv_usec = end.tv_usec - start.tv_usec;
        if(end.tv_usec < start.tv_usec)
        {
            out.tv_usec += 1000000;
            out.tv_sec--;
        }
        return out;
    }
    else if(!isNaN(start) && !isNaN(end))
    {
        return end-start;
    }
};