import mongoose from 'mongoose';
import { exec } from 'child_process';
import gulp from 'gulp';
import os from 'os';
import nconf from 'nconf';
import pkg from '../../package.json';

gulp.task('nodemon', done => {
  nodemon({
    script: pkg.main,
  });
  done();
});

var waitFunction= function (time) {
  return new Promise((res) => {
    setTimeout(res, time);
  });
}

describe('Running coverage test', function() {
  this.timeout(1000000);
  it('Running server', function() {
    gulp.series('nodemon');
  })
  it('Keep it running', async function() {
    await waitFunction(200000);
  })
})