// Copyright (c) 2015 Tzvetan Mikov.
// Licensed under the Apache License v2.0. See LICENSE in the project
// root for complete license information.

var console = {};

function Error (message)
{
    this.message = message;
}

function TypeError (message)
{
    Error.call(this, message);
}
